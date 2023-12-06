# will contain information about the tea and related records (transactions, for example)

json.tea do
  json.extract! @tea, :id, :flavor, :price, :description
  json.photoUrl @tea.photo.attached? ? url_for(@tea.photo) : nil
  json.transactionIds @tea.transaction_ids
  # json.buyerIds @tea.buyer_ids
end

@transactions = @tea.transactions.includes(:buyer)

json.transactions do
  @transactions.each do |transaction|
    json.set! transaction.id do 
      json.extract! transaction, :id, :quantity, :created_at
      json.buyer transaction.buyer.username
    end
  end
end