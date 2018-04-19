class ContactsController < ApplicationController
  before_action :load_contact

  def show; end

  def edit; end

  def update
    if @contact.update(contact_params)
      flash.now[:notice] = t('.successfully_update')
      render :show
    else
      flash.now[:alert] = t('.didn_t_update')
      render :edit
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :phone,
                                    address_attributes: %i[latitude longitude id])
  end

  def load_contact
    @contact = Contact.first
  end
end
