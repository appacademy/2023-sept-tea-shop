# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :transactions,
    foreign_key: :buyer_id,
    dependent: :destroy

  has_many :purchased_teas,
    through: :transactions,
    source: :tea

  has_one_attached :profile_pic

  before_validation :ensure_session_token


  has_secure_password # automates password= and defines #authenticate(password)

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user&.authenticate(password)
      user
    else
      nil
    end
  end

  # def password=(password)

  # end

  # def is_password?(password)

  # end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  private
  def generate_session_token
    loop do
      token = SecureRandom::urlsafe_base64
      return token unless User.exists?(session_token: token)
    end
  end
end
