class Form < ApplicationRecord
  validates :name,:email,:content, presence: true
end
