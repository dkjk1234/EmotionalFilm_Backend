


def find_mapping(encoded_strings, target_string):
    # 먼저 각 줄을 분할하여 단어 목록을 얻습니다.
    encoded_words_lists = [line.split() for line in encoded_strings]
    target_words = target_string.split()

    for encoded_words in encoded_words_lists:
        # 타겟 문자열과 동일한 단어 수를 가진 줄을 찾습니다.
        if len(encoded_words) == len(target_words):
            print("동일한 문자 발견 ")
            mapping = {ew: tw for ew, tw in zip(encoded_words, target_words)}
            # 모든 줄에 대해 일관된 매핑을 가지고 있는지 확인합니다.
            if all(is_mapping_consistent(line.split(), mapping) for line in encoded_strings):
                return mapping

    return None  # 적합한 매핑을 찾지 못했습니다.

def is_mapping_consistent(encoded_words, mapping):
    # 매핑된 단어들을 이용해 원래 문장을 재구성하려 시도합니다.
    try:
        decoded_words = [mapping[ew] for ew in encoded_words]
    except KeyError:  # 매핑되지 않은 단어를 발견했습니다.
        return False

    return True  # 모든 단어가 매핑되었습니다.

def decode_strings(encoded_strings, mapping):
    return [' '.join(mapping[ew] for ew in line.split()) for line in encoded_strings]

# 테스트를 위한 인코딩된 문자열
encoded_strings = [
    "zvvb cxinc feqrf gxqe meichf bsfh",
    "gxq lsn slhivtv sng hich cxsu",
    "yqkb jxcr whg tvd aeifp musnz ol",
    "bqrh xn rvipv vtveg qnioqv jsg",
    "mvuivtv in gxqe xwn rfexnc wiuu"
]
target_string = "jump dogs why vex fritz blank qc"

# 매핑을 찾고 인코딩된 문자열을 디코딩합니다.
mapping = find_mapping(encoded_strings, target_string)
if mapping is not None:
    decoded_strings = decode_strings(encoded_strings, mapping)
    print(decoded_strings)
else:
    print("Could not find a consistent mapping.")
