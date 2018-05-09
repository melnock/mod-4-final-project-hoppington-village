class Api::V1::PetsController < ApplicationController

  def index
    render json: Pet.all
  end

  def update
    @pet = Pet.find(params[:id])
    @pet.update(pet_params)
  end


  def create
    @pet = Pet.create(pet_params)
    if @pet
      render json: @pet
    else
      render json: { errors: @pet.errors.full_messages}
    end
  end

  def show
    render json: Pet.find(params[:id])
  end

  private

  def pet_params
    params.require(:pet).permit(:user_id, :animal_id, :name, :hunger_level, :cleanliness, :energy_level)
  end

end
