# Preview all emails at http://localhost:3000/rails/mailers/contactmailer_mailer
class ContactmailerMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contactmailer_mailer/contact_mail
  def contact_mail
    ContactmailerMailer.contact_mail
  end

end
