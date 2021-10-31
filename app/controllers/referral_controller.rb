class ReferralController < ApplicationController
  def create
    @referral = Referral.create(referral_params.merge(user_id: current_user))
    if @referal.save
      render json: @referal, status: :ok, location: @referal
    else
      render json: @referal.errors, status: :unprocessable_entity
    end
  end

  def index
    @referals = Referral.where(user_id: current_user)
    render json: @referals
  end

  private 

  def referral_params
    params.require(:user).permit(:email)
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
   end
end