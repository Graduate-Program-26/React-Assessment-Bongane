import {
  Autocomplete,
  AutocompleteProps,
  Avatar,
  Group,
  Text,
} from "@mantine/core";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { GithubUserResult } from "../lib/github/schemas/userResult.schema";

interface SearchBoxProps {
  users?: GithubUserResult[];
}

export default function SearchBox({ users }: SearchBoxProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    console.log(`${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const renderAutocompleteOption: AutocompleteProps["renderOption"] = ({
    option,
  }) => {
    const user = users?.find((u) => u.login === option.value);
    return (
      <Group gap="sm">
        <Avatar src={user?.avatar_url} size={36} radius="xl" />
        <Text size="sm">{option.value}</Text>
      </Group>
    );
  };

  return (
    <Autocomplete
      visibleFrom="sm"
      onChange={handleSearch}
      data={users?.map((u) => u.login)}
      renderOption={renderAutocompleteOption}
      style={{ width: "300px" }}
      rightSectionWidth="lg"
      placeholder="Search for username"
    />
  );
}
