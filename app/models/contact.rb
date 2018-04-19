class Contact < ApplicationRecord
  has_one :address
  accepts_nested_attributes_for :address

  validates :email, format: { with: /\A[^@\s]+@[^@\s]+\z/ },
                    presence: true
  validates :phone, format: { with: /\A[+]\d{2}-\d{3}-\d{3}-\d{2}-\d{2}\z/ },
                    presence: true
end
