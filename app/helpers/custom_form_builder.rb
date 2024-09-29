# app/helpers/custom_form_builder.rb
class CustomFormBuilder < ActionView::Helpers::FormBuilder
  def text_field(method, options = {})
    render_input('text', method, options)
  end

  def email_field(method, options = {})
    render_input('email', method, options)
  end

  def check_box(method, options = {}, checked_value = "1", unchecked_value = "0")
    @template.render partial: 'shared/checkbox', locals: {
      label: options[:label],
      id: method,
      name: "#{@object_name}[#{method}]",
      value: checked_value,
      checked: object_value(method)
    }
  end

  def submit(value = nil, options = {})
  @template.render partial: 'shared/button', locals: {
    text: value || 'Submit',
    additional_classes: "bg-indigo-500 text-white"
  }
end

  def datepicker_field(method, options = {})
  @template.render partial: "shared/datepicker", locals: { 
    input_name: "#{object_name}[#{method}]",
    selected_value: object_value(method) || ""
  }
  end


  def radio_button(method, tag_value, options = {})
    @template.render partial: 'shared/radio_button', locals: {
      label: options[:label],
      id: "#{method}_#{tag_value}",
      name: "#{@object_name}[#{method}]",
      value: tag_value,
      checked: object_value(method) == tag_value
    }
  end

  def submit(value = nil, options = {})
    @template.button_tag(type: 'submit', class: "bg-indigo-500 text-white px-4 py-2 rounded-md") do
      value || 'Submit'
    end
  end

  private

  def render_input(type, method, options)
    @template.render partial: 'shared/input_field', locals: {
      label: options[:label],
      type: type,
      id: method,
      name: "#{@object_name}[#{method}]",
      value: object_value(method),
      error_message: object_errors(method)
    }
  end

  def object_value(method)
    object.respond_to?(method) ? object.public_send(method) : nil
  end

  def object_errors(method)
    object.respond_to?(:errors) && object.errors.respond_to?(:[]) ? object.errors[method].first : nil
  end
end
