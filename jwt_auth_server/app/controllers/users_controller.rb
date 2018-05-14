class UsersController < ApplicationController
  def create
    input = User.new(params.permit(:useremail, :password))
    if(input.save)
      :ok
    else
      :bad_request
    end
  end
end
