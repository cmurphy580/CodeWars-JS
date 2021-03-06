function f(n, m) {
  return ((~~(n / m) * m * (m - 1)) / 2) + (((n % m) * (n % m + 1)) / 2 )
}

/*
INSTRUCTIONS: 

Write this function

f(n,m) = sum(i%m) - > 1 to n

for i from 1 to n, do i % m and return the sum

f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)
You'll need to get a little clever with performance, since n can be a very large number

*/