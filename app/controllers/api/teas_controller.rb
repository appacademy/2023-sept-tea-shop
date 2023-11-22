class Api::TeasController < ApplicationController
  # wrap_parameters

  def index
    @teas = Tea.all
    render json: @teas
  end

  def create
    @tea = Tea.new(tea_params)
    if @tea.save
      render json: @tea
    else
      render json: @tea.errors.full_messages, status: 422
    end
  end

  def destroy
    @tea = Tea.find_by(id: params[:id])
    if @tea&.destroy
      head :no_content
    else
      render json: ['Something went wrong'], status: 422
    end
  end

  private
  def tea_params
    params.require(:tea).permit(:flavor, :price, :description)
  end
end
