class ReferralController < ApplicationController

  def create
    @referral = Referral.new(referral_params)
    if @referral.save
      render json: @referral, status: :ok
    else
      render json: @referral.errors, status: :unprocessable_entity
    end
  end

  def index
    @referrals = Referral.all 
    render json: @referrals, only: [:id, :email, :user_id]
  end

  private 

  def referral_params
    params.require(:referral).permit(:email, :user_id)
  end
end