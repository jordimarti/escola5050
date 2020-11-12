require 'test_helper'

class FasesControllerTest < ActionDispatch::IntegrationTest
  test "should get canvi_fase" do
    get fases_canvi_fase_url
    assert_response :success
  end

end
