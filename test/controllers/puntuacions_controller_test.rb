require 'test_helper'

class PuntuacionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @puntuacio = puntuacions(:one)
  end

  test "should get index" do
    get puntuacions_url
    assert_response :success
  end

  test "should get new" do
    get new_puntuacio_url
    assert_response :success
  end

  test "should create puntuacio" do
    assert_difference('Puntuacio.count') do
      post puntuacions_url, params: { puntuacio: { correcte: @puntuacio.correcte, fase: @puntuacio.fase, user_id: @puntuacio.user_id } }
    end

    assert_redirected_to puntuacio_url(Puntuacio.last)
  end

  test "should show puntuacio" do
    get puntuacio_url(@puntuacio)
    assert_response :success
  end

  test "should get edit" do
    get edit_puntuacio_url(@puntuacio)
    assert_response :success
  end

  test "should update puntuacio" do
    patch puntuacio_url(@puntuacio), params: { puntuacio: { correcte: @puntuacio.correcte, fase: @puntuacio.fase, user_id: @puntuacio.user_id } }
    assert_redirected_to puntuacio_url(@puntuacio)
  end

  test "should destroy puntuacio" do
    assert_difference('Puntuacio.count', -1) do
      delete puntuacio_url(@puntuacio)
    end

    assert_redirected_to puntuacions_url
  end
end
