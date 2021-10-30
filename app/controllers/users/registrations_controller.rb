# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  private

  def respond_with(sign_up_params, _opts = {})
    if resource.persisted?
      render json: {
        status: {code: 200, message: 'Signed up sucessfully.'},
        data: UserSerializer.new(resource).serializable_hash[:data][:attributes]
      }
    else
      render json: {
        status: {message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}"}
      }, status: :unprocessable_entity
    end
  end
  
  def sign_up_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
   end

end
