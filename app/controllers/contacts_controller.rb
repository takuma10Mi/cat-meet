class ContactsController < ApplicationController

  def index
  end
  
  def new
    @form = Form.new
  end

  def create
    @form = Form.create(form_params)  #格納された値を保存
  end

  private
  def form_params
      params.require(:form).permit(:name, :email, :phone, :content)  #paramsの中身をpermitして保存を許可
  end
end
