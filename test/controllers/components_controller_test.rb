require "test_helper"

class ComponentsControllerTest < ActionDispatch::IntegrationTest
  test "should get example" do
    get components_example_url
    assert_response :success
  end
end
