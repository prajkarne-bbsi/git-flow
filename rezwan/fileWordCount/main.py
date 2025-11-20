import json

def get_word_count_from_file(file):
  word_count = 0
  
  with open(file) as file:
    for line in file:
      for word in line.split():
          word_count += 1

  return json.dumps({"count": word_count})


def main():
  print(get_word_count_from_file('./file.txt'))


main()