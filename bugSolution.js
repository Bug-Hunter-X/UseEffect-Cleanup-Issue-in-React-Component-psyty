```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // ... some logic ...
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>{count}</div>
  );
}
```