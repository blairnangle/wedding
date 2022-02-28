resource "aws_route53_zone" "blair_and_helena" {
  name = "blairandhelena.com"
}

resource "aws_route53_record" "alias" {
  zone_id = aws_route53_zone.blair_and_helena.id
  name    = var.domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  type            = each.value.type
  zone_id         = aws_route53_zone.blair_and_helena.id
  records = [
    each.value.record
  ]
  ttl = 60
}
