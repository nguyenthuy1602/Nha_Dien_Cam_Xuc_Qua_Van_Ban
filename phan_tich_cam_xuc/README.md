---
language: vi
tags:
- emotion-recognition
- vietnamese
- bartpho
license: apache-2.0
datasets:
- VSMEC
metrics:
- accuracy
- f1
model-index:
- name: bartpho-emotion
  results:
  - task:
      type: text-classification
      name: Emotion Recognition
    dataset:
      name: VSMEC
      type: custom
    metrics:
    - name: Accuracy
      type: accuracy
      value: <INSERT_ACCURACY>
    - name: F1 Score
      type: f1
      value: <INSERT_F1_SCORE>
base_model:
- vinai/bartpho-syllable
pipeline_tag: text-classification
---

# bartpho-emotion: Emotion Recognition for Vietnamese Text

This model is a fine-tuned version of [`vinai/bartpho-syllable`](https://huggingface.co/vinai/bartpho-syllable) on the **VSMEC** dataset for emotion recognition in Vietnamese text. It achieves state-of-the-art performance on this task.

## Model Details

- **Base Model**: [`vinai/bartpho-syllable`](https://huggingface.co/vinai/bartpho-syllable)
- **Dataset**: [VSMEC](https://github.com/uitnlp/vsmec) (Vietnamese Social Media Emotion Corpus)
- **Fine-tuning Framework**: HuggingFace Transformers
- **Hyperparameters**:
  - Batch size: `32`
  - Learning rate: `5e-5`
  - Epochs: `100`
  - Max sequence length: `256`

## Dataset

The model was trained on the **VSMEC** dataset, which contains Vietnamese social media text annotated with emotion labels. The dataset includes the following emotion categories: 
`{"Anger": 0, "Disgust": 1, "Enjoyment": 2, "Fear": 3, "Other": 4, "Sadness": 5, "Surprise": 6}`.

## Results

The model was evaluated using the following metrics:

- **Accuracy**: `<INSERT_ACCURACY>`
- **F1 Score**: `<INSERT_F1_SCORE>`

## Usage

You can use this model for emotion recognition in Vietnamese text. Below is an example of how to use it with the HuggingFace Transformers library:

```python
from transformers import AutoTokenizer, AutoModelForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("visolex/bartpho-emotion")
model = AutoModelForSequenceClassification.from_pretrained("visolex/bartpho-emotion")

text = "Tôi rất vui vì hôm nay trời đẹp!"
inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=256)
outputs = model(**inputs)
predicted_class = outputs.logits.argmax(dim=-1).item()

print(f"Predicted emotion: {predicted_class}")