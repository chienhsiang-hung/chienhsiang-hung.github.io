import pandas as pd

TradeHistory = pd.read_excel('./assets/py/TradeHistory.xlsx', index_col=1)

print(TradeHistory)