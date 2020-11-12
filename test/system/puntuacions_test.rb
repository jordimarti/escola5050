require "application_system_test_case"

class PuntuacionsTest < ApplicationSystemTestCase
  setup do
    @puntuacio = puntuacions(:one)
  end

  test "visiting the index" do
    visit puntuacions_url
    assert_selector "h1", text: "Puntuacions"
  end

  test "creating a Puntuacio" do
    visit puntuacions_url
    click_on "New Puntuacio"

    check "Correcte" if @puntuacio.correcte
    fill_in "Fase", with: @puntuacio.fase
    fill_in "User", with: @puntuacio.user_id
    click_on "Create Puntuacio"

    assert_text "Puntuacio was successfully created"
    click_on "Back"
  end

  test "updating a Puntuacio" do
    visit puntuacions_url
    click_on "Edit", match: :first

    check "Correcte" if @puntuacio.correcte
    fill_in "Fase", with: @puntuacio.fase
    fill_in "User", with: @puntuacio.user_id
    click_on "Update Puntuacio"

    assert_text "Puntuacio was successfully updated"
    click_on "Back"
  end

  test "destroying a Puntuacio" do
    visit puntuacions_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Puntuacio was successfully destroyed"
  end
end
