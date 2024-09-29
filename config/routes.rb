Rails.application.routes.draw do
  get 'components/example'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  root "components#accordion"
  get 'components/badge', to: 'components#badge'
  get 'components/combobox', to: 'components#combobox'
  get 'components/accordion', to: 'components#accordion'
  get 'components/datepicker', to: 'components#datepicker'
  get 'components/toast', to: 'components#toast'
  get 'components/tooltip', to: 'components#tooltip'
  get 'components/skeleton', to: 'components#skeleton'
  get 'components/dropzone', to: 'components#dropzone'
  get 'components/modal', to: 'components#modal'
  get 'components/collapsible', to: 'components#collapsible'
  get 'components/list', to: 'components#list'
  get 'components/table', to: 'components#table'
  get 'components/card', to: 'components#card'
  get 'components/select', to: 'components#select'
  get 'components/banner', to: 'components#banner'
  get 'components/tabs', to: 'components#tabs'

  # Component routes
  get 'components/avatar', to: 'components#avatar'
  get 'components/checkbox', to: 'components#checkbox'
  get 'components/codeblock', to: 'components#codeblock'
  get 'components/dropdown', to: 'components#dropdown'
  get 'components/icon', to: 'components#icon'
  get 'components/input_field', to: 'components#input_field'
  get 'components/page', to: 'components#page'
  get 'components/radio_button', to: 'components#radio_button'
  get 'components/button', to: 'components#button'
  get 'components/form', to: 'components#form'

end
