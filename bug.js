```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to handle event listener cleanup
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    // ... some logic ...
  };

  return (
    <div>{count}</div>
  );
}
```