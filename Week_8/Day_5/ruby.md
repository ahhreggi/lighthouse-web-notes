# Ruby

## JavaScript/NodeJS
- Created in 10 days in 1995
- Can run both on server and client (frontend/backend)
- Highly performant (async)
- Very flexible
- Giant ecosystem of packages
- Primitive data types + objects
- Functional but has OOP mixed in it

## Ruby/Rails
- Also released in 1995 but took off in 2005 due to a framework called Ruby on Rails
- Created by Yukihiro Matsumoto (Matz)
- Ruby/Rails is only run on the backend
- Syntax of ruby is "simplified" (english-y)
- High-level of abstractions (opinionated)
- Synchronous
- Making prototypes (demo websites, or started apps) is actually quite fast
- Fairly big ecosystem of packages (gems)

## Yield Example
```
def yield_example arr
  puts "---- array loop ----"
  arr.each_with_index do |elem, i|
    yield(elem, i)
  end
end

yield_example([1, 2, 3, 4, 5]) { |item, i| puts "value is #{item} at index #{i}" }

# start timer
# yield <-- run your function
# stop timer
# check how long your function took to execute
```