class FormsController < ApplicationController
  def index
    @form = Form.new
  end

  def create
    Form.create(form_params)
    redirect_to action: 'index'
  end

private
  def form_params
      params.require(:form).permit(:name, :email, :content) 
  end

end