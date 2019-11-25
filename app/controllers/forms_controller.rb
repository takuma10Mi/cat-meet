class FormsController < ApplicationController
  def index
    @form = Form.new
  end

  def create
    @form = Form.create(form_params)
    
  end

private
  def form_params
      params.require(:form).permit(:name, :email, :content) 
  end

end