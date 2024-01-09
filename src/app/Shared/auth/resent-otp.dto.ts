export class ResentOTPDTO {
  country_code: string;
  phone: string;
  otp: string;

  constructor(country_code: string, phone: string, otp: string) {
    this.country_code = country_code;
    this.phone = phone;
    this.otp = otp;
  }
}
