function solution(commands) {
  const answer = [];
  const N = 50; // 50x50 표
  const size = N * N;
  
  const parent = Array.from({length: size}, (_, i) => i);
  const value = Array(size).fill('');

  const find = (x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent[x]));
  };

  const union = (a, b) => {
    const ra = find(a);
    const rb = find(b);
    if (ra === rb) return;
    
    // 병합 규칙: (r1,c1)의 root(ra)가 대표
    parent[rb] = ra;

    // 값 통합
    if (value[ra] === '' && value[rb] !== '') value[ra] = value[rb];
    value[rb] = ''; // rb는 이제 서브 그룹이 됨
  };

  const rcToIndex = (r, c) => (r - 1) * N + (c - 1);

  for (const cmd of commands) {
    const parts = cmd.split(' ');
    const type = parts[0];

    if (type === 'UPDATE') {
      if (parts.length === 4) {
        const [_, r, c, val] = parts;
        const idx = rcToIndex(+r, +c);
        const root = find(idx);
        value[root] = val;
      } else {
        const [_, val1, val2] = parts;
        for (let i = 0; i < size; i++) {
          if (value[find(i)] === val1) {
            value[find(i)] = val2;
          }
        }
      }
    }

    else if (type === 'MERGE') {
      const [_, r1, c1, r2, c2] = parts.map(Number);
      if (r1 === r2 && c1 === c2) continue;
      const idx1 = rcToIndex(r1, c1);
      const idx2 = rcToIndex(r2, c2);
      union(idx1, idx2);
    }

    else if (type === 'UNMERGE') {
      const [_, r, c] = parts.map(Number);
      const idx = rcToIndex(r, c);
      const root = find(idx);
      const rootValue = value[root];

      // root 그룹 전체 해제
      const group = [];
      for (let i = 0; i < size; i++) {
        if (find(i) === root) group.push(i);
      }

      for (const i of group) {
        parent[i] = i;
        value[i] = '';
      }

      // 선택 셀에 값 복구
      value[idx] = rootValue;
    }

    else if (type === 'PRINT') {
      const [_, r, c] = parts.map(Number);
      const idx = rcToIndex(r, c);
      const root = find(idx);
      answer.push(value[root] === '' ? 'EMPTY' : value[root]);
    }
  }

  return answer;
}
