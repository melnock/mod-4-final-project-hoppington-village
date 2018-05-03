class Api::V1::OutfitsController < ApplicationController

  def index
    render json: Outfit.all
  end

end
