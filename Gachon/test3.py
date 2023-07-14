import sys
def find_mapping(encoded_strings, target_string):
    # 각 줄을 글자단위로 분할하고, 각 문자의 위치 정보(인덱스, 원소)도 저장합니다.
    encoded_chars_lists = [(i, list(line)) for i, line in enumerate(encoded_strings)]
    target_chars = list(target_string.replace(' ', ''))

    for index, encoded_chars in encoded_chars_lists:
        # 타겟 문자열과 동일한 문자 수를 가진 줄을 찾습니다.
        encoded_chars_no_space = [c for c in encoded_chars if c != ' ']
        if len(encoded_chars_no_space) == len(target_chars):
            mapping = {ew: tw for ew, tw in zip(encoded_chars_no_space, target_chars)}
            # 모든 줄에 대해 일관된 매핑을 가지고 있는지 확인합니다.
            if all(is_mapping_consistent(list(line.replace(' ', '')), mapping) for line in encoded_strings):
                return mapping, index

    return None, None  # 적합한 매핑을 찾지 못했습니다.

def is_mapping_consistent(encoded_chars, mapping):
    # 매핑된 글자들을 이용해 원래 문장을 재구성하려 시도합니다.
    try:
        decoded_chars = [mapping[ew] for ew in encoded_chars]
    except KeyError:  # 매핑되지 않은 글자를 발견했습니다.
        return False

    return True  # 모든 글자가 매핑되었습니다.

def decode_strings(encoded_strings, mapping, target_index):
    decoded_strings = []
    for i, line in enumerate(encoded_strings):
        if i == target_index:
            decoded_strings.append('jump dogs why vex fritz blank qc')
        else:
            decoded_line = ''.join(mapping[c] if c != ' ' else ' ' for c in line)
            decoded_strings.append(decoded_line)
    return decoded_strings

def main():
    target_string = "jump dogs why vex fritz blank qc"
    
    print("Enter your encoded strings. Enter 'DONE' when finished.")
    encoded_strings = []
    while True:
        line = input()
        if line == 'DONE':
            break
        encoded_strings.append(line)

    # 매핑을 찾고 인코딩된 문자열을 디코딩합니다.
    mapping, target_index = find_mapping(encoded_strings, target_string)
    if mapping is not None:
        decoded_strings = decode_strings(encoded_strings, mapping, target_index)
        print('\n'.join(decoded_strings))
    else:
        print("Could not find a consistent mapping.")

if __name__ == "__main__":
    main()
