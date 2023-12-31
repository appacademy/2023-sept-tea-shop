class Api::TeasController < ApplicationController
  # wrap_parameters include: Tea.attribute_names + ['photo']

  def show
    @tea = Tea.find_by(id: params[:id])
    render :show
  end

  def index
    # want to allow for filtering/searching
    if params[:search]
      @teas = Tea.where("flavor ILIKE '%#{params[:search]}%'")
    else
      @teas = Tea.all
    end
    # render json: @teas
    render :index
  end

  def create
    # debugger
    @tea = Tea.new(tea_params)
    if @tea.save!
      render :info
    else
      render json: @tea.errors.full_messages, status: 422
    end
  end

  def destroy
    @tea = Tea.find_by(id: params[:id])
    if @tea&.destroy
      head :no_content
      # render json: @tea
    else
      render json: ['Something went wrong'], status: 422
    end
  end

  private
  def tea_params
    params.require(:tea).permit(:flavor, :price, :description, :photo)
  end
end
