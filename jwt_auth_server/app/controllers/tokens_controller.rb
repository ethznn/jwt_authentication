class TokensController < ApplicationController
  def create
    user = User.find_by(useremail: params[:useremail])
    if user&.authenticate(params[:password])
      render json: {
        jwt: encode_token({id: user.id, useremail: user.useremail})
      }
    else
      head :not_found
    end
  end
  
  private 
  def encode_token(payload={})
    exp = 24.hours.from_now
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.credentials.secret_key_base)
  end
end
