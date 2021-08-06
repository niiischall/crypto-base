printAllPageLinks();

export function printAllPageLinks() {
  const allLinks = Array.from(document.querySelectorAll("a")).map(
    (link) => link.href
  );

  console.log("-".repeat(30));
  console.log(
    `These are all ${allLinks.length} links on the current page that have been printed by the Sample Create React Extension`
  );
  console.log(allLinks);
  console.log("-".repeat(30));
}
