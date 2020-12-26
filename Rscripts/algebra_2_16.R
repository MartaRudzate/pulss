f <- function(n) {
  x <- (n+1):(3*n+1)
  y <- x^(-1)

  return(sum(y))
  
}
f(1000)