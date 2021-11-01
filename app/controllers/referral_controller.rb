class ReferralController < ApplicationController

  def create
    @referal = Referral.new(referral_params)
    if @referal.save
      render json: @referal, status: :ok, location: @referal
    else
      render json: @referal.errors, status: :unprocessable_entity
    end
  end

  def index
    @referrals = Referral.all 
    render json: @referrals, only: [:id, :email, :user_id]
  end

  private 

  def referral_params
    params.require(:user).permit(:email, :user_id)
  end
end