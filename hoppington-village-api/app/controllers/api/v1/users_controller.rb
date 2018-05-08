class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate!, only: :create

  def create
    @user = User.create(username:params["username"], password: params["password"])
    if @user
      render json: @user
    else
      render json: { errors: @user.errors.full_messages}
    end
  end

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
