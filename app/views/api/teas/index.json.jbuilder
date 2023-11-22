@teas.each do |tea|
  json.set! tea.id do
    # json.id tea.id
    # json.flavor tea.flavor
    # json.description tea.description
    # json.extract! tea, :id, :flavor, :description
    json.partial! 'tea', banana: tea
  end
end