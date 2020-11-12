require 'test_helper'

class MissatgesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @missatge = missatges(:one)
  end

  test "should get index" do
    get missatges_url
    assert_response :success
  end

  test "should get new" do
    get new_missatge_url
    assert_response :success
  end

  test "should create missatge" do
    assert_difference('Missatge.count') do
      post missatges_url, params: { missatge: { contingut: @missatge.contingut, user_id: @missatge.user_id } }
    end

    assert_redirected_to missatge_url(Missatge.last)
  end

  test "should show missatge" do
    get missatge_url(@missatge)
    assert_response :success
  end

  test "should get edit" do
    get edit_missatge_url(@missatge)
    assert_response :success
  end

  test "should update missatge" do
    patch missatge_url(@missatge), params: { missatge: { contingut: @missatge.contingut, user_id: @missatge.user_id } }
    assert_redirected_to missatge_url(@missatge)
  end

  test "should destroy missatge" do
    assert_difference('Missatge.count', -1) do
      delete missatge_url(@missatge)
    end

    assert_redirected_to missatges_url
  end
end
