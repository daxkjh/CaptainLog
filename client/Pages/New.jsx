const New = () => {
  return (
    <div>
        <h1>NEW ENTRY</h1>
      <form action="/" method="post">
        <fieldset>
          <label>Title</label>
          <input type="text" name="title" id="name" /><br></br>
          <label>Entry</label>
          <textarea name="entry" id="color" /><br></br>
          <label >Is Ship Broken?</label>
          <input type="checkbox" name="shipIsBroken" id="brokeShip" /><br></br>
          <input type="submit" value="Create Log" />
        </fieldset>
      </form>
    </div>
  );
};

export default New;
