class Api::V1::AnimalsController < ApplicationController

  def index
    render json: Animal.all
  end

end
