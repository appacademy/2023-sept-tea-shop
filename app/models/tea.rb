# == Schema Information
#
# Table name: teas
#
#  id          :bigint           not null, primary key
#  flavor      :string           not null
#  price       :float            not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Tea < ApplicationRecord
  validates :flavor, :price, presence: true

  has_many :transactions, # also creates method #transaction_ids
    dependent: :destroy

  has_many :buyers,
    through: :transactions,
    source: :buyer
end
