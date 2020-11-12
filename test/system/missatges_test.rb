require "application_system_test_case"

class MissatgesTest < ApplicationSystemTestCase
  setup do
    @missatge = missatges(:one)
  end

  test "visiting the index" do
    visit missatges_url
    assert_selector "h1", text: "Missatges"
  end

  test "creating a Missatge" do
    visit missatges_url
    click_on "New Missatge"

    fill_in "Contingut", with: @missatge.contingut
    fill_in "User", with: @missatge.user_id
    click_on "Create Missatge"

    assert_text "Missatge was successfully created"
    click_on "Back"
  end

  test "updating a Missatge" do
    visit missatges_url
    click_on "Edit", match: :first

    fill_in "Contingut", with: @missatge.contingut
    fill_in "User", with: @missatge.user_id
    click_on "Update Missatge"

    assert_text "Missatge was successfully updated"
    click_on "Back"
  end

  test "destroying a Missatge" do
    visit missatges_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Missatge was successfully destroyed"
  end
end
