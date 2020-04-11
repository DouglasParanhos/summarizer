from summa.summarizer import summarize
import sys

text = sys.argv[1]
percentual = sys.argv[2]

summary = summarize(text=text, ratio=float(percentual))

print(summary)
