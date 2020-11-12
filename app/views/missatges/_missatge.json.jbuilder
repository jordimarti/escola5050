json.extract! missatge, :id, :user_id, :contingut, :created_at, :updated_at
json.url missatge_url(missatge, format: :json)
