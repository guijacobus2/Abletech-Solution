for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' FooBar');
    } else if (i % 3 == 0) {
        console.log(i + ' Foo');
    } else if (i % 5 == 0) {
        console.log(i + ' Bar');
    } else {
        console.log(i);
    }
}