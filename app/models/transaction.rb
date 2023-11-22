# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  buyer_id   :bigint           not null
#  tea_id     :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Transaction < ApplicationRecord
  validates :quantity, presence: true

  belongs_to :tea

  belongs_to :buyer,
    class_name: :User
end
