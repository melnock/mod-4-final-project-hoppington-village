class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate!, only: :create

  def create
    @user = User.create(user_params)
    if @user
      render json: @user
    else
      render json: { errors: @user.errors.full_messages}
    end
  end

  def index
    render json: User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
